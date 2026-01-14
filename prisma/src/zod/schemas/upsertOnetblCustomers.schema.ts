import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersSelectObjectSchema as tblCustomersSelectObjectSchema } from './objects/tblCustomersSelect.schema';
import { tblCustomersIncludeObjectSchema as tblCustomersIncludeObjectSchema } from './objects/tblCustomersInclude.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './objects/tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateInputObjectSchema as tblCustomersCreateInputObjectSchema } from './objects/tblCustomersCreateInput.schema';
import { tblCustomersUncheckedCreateInputObjectSchema as tblCustomersUncheckedCreateInputObjectSchema } from './objects/tblCustomersUncheckedCreateInput.schema';
import { tblCustomersUpdateInputObjectSchema as tblCustomersUpdateInputObjectSchema } from './objects/tblCustomersUpdateInput.schema';
import { tblCustomersUncheckedUpdateInputObjectSchema as tblCustomersUncheckedUpdateInputObjectSchema } from './objects/tblCustomersUncheckedUpdateInput.schema';

export const tblCustomersUpsertOneSchema: z.ZodType<Prisma.tblCustomersUpsertArgs> = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), where: tblCustomersWhereUniqueInputObjectSchema, create: z.union([ tblCustomersCreateInputObjectSchema, tblCustomersUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustomersUpdateInputObjectSchema, tblCustomersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblCustomersUpsertArgs>;

export const tblCustomersUpsertOneZodSchema = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), where: tblCustomersWhereUniqueInputObjectSchema, create: z.union([ tblCustomersCreateInputObjectSchema, tblCustomersUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustomersUpdateInputObjectSchema, tblCustomersUncheckedUpdateInputObjectSchema ]) }).strict();