import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema';
import { tblAgrRightsUpdateManyMutationInputObjectSchema as tblAgrRightsUpdateManyMutationInputObjectSchema } from './tblAgrRightsUpdateManyMutationInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInput>;
export const tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInputObjectZodSchema = makeSchema();
