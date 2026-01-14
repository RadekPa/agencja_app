import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersSelectObjectSchema as tblCustomersSelectObjectSchema } from './objects/tblCustomersSelect.schema';
import { tblCustomersIncludeObjectSchema as tblCustomersIncludeObjectSchema } from './objects/tblCustomersInclude.schema';
import { tblCustomersUpdateInputObjectSchema as tblCustomersUpdateInputObjectSchema } from './objects/tblCustomersUpdateInput.schema';
import { tblCustomersUncheckedUpdateInputObjectSchema as tblCustomersUncheckedUpdateInputObjectSchema } from './objects/tblCustomersUncheckedUpdateInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './objects/tblCustomersWhereUniqueInput.schema';

export const tblCustomersUpdateOneSchema: z.ZodType<Prisma.tblCustomersUpdateArgs> = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), data: z.union([tblCustomersUpdateInputObjectSchema, tblCustomersUncheckedUpdateInputObjectSchema]), where: tblCustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustomersUpdateArgs>;

export const tblCustomersUpdateOneZodSchema = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), data: z.union([tblCustomersUpdateInputObjectSchema, tblCustomersUncheckedUpdateInputObjectSchema]), where: tblCustomersWhereUniqueInputObjectSchema }).strict();