import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsSelectObjectSchema as tblCustContactsSelectObjectSchema } from './objects/tblCustContactsSelect.schema';
import { tblCustContactsIncludeObjectSchema as tblCustContactsIncludeObjectSchema } from './objects/tblCustContactsInclude.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './objects/tblCustContactsWhereUniqueInput.schema';

export const tblCustContactsFindUniqueOrThrowSchema: z.ZodType<Prisma.tblCustContactsFindUniqueOrThrowArgs> = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), where: tblCustContactsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustContactsFindUniqueOrThrowArgs>;

export const tblCustContactsFindUniqueOrThrowZodSchema = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), where: tblCustContactsWhereUniqueInputObjectSchema }).strict();