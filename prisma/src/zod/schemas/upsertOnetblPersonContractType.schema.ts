import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeSelectObjectSchema as tblPersonContractTypeSelectObjectSchema } from './objects/tblPersonContractTypeSelect.schema';
import { tblPersonContractTypeWhereUniqueInputObjectSchema as tblPersonContractTypeWhereUniqueInputObjectSchema } from './objects/tblPersonContractTypeWhereUniqueInput.schema';
import { tblPersonContractTypeCreateInputObjectSchema as tblPersonContractTypeCreateInputObjectSchema } from './objects/tblPersonContractTypeCreateInput.schema';
import { tblPersonContractTypeUncheckedCreateInputObjectSchema as tblPersonContractTypeUncheckedCreateInputObjectSchema } from './objects/tblPersonContractTypeUncheckedCreateInput.schema';
import { tblPersonContractTypeUpdateInputObjectSchema as tblPersonContractTypeUpdateInputObjectSchema } from './objects/tblPersonContractTypeUpdateInput.schema';
import { tblPersonContractTypeUncheckedUpdateInputObjectSchema as tblPersonContractTypeUncheckedUpdateInputObjectSchema } from './objects/tblPersonContractTypeUncheckedUpdateInput.schema';

export const tblPersonContractTypeUpsertOneSchema: z.ZodType<Prisma.tblPersonContractTypeUpsertArgs> = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  where: tblPersonContractTypeWhereUniqueInputObjectSchema, create: z.union([ tblPersonContractTypeCreateInputObjectSchema, tblPersonContractTypeUncheckedCreateInputObjectSchema ]), update: z.union([ tblPersonContractTypeUpdateInputObjectSchema, tblPersonContractTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeUpsertArgs>;

export const tblPersonContractTypeUpsertOneZodSchema = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  where: tblPersonContractTypeWhereUniqueInputObjectSchema, create: z.union([ tblPersonContractTypeCreateInputObjectSchema, tblPersonContractTypeUncheckedCreateInputObjectSchema ]), update: z.union([ tblPersonContractTypeUpdateInputObjectSchema, tblPersonContractTypeUncheckedUpdateInputObjectSchema ]) }).strict();