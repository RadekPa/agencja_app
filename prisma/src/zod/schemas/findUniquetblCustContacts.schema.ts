import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsSelectObjectSchema as tblCustContactsSelectObjectSchema } from './objects/tblCustContactsSelect.schema';
import { tblCustContactsIncludeObjectSchema as tblCustContactsIncludeObjectSchema } from './objects/tblCustContactsInclude.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './objects/tblCustContactsWhereUniqueInput.schema';

export const tblCustContactsFindUniqueSchema: z.ZodType<Prisma.tblCustContactsFindUniqueArgs> = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), where: tblCustContactsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustContactsFindUniqueArgs>;

export const tblCustContactsFindUniqueZodSchema = z.object({ select: tblCustContactsSelectObjectSchema.optional(), include: tblCustContactsIncludeObjectSchema.optional(), where: tblCustContactsWhereUniqueInputObjectSchema }).strict();