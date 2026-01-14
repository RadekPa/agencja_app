import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema';
import { tblAgrRightsUpdateManyMutationInputObjectSchema as tblAgrRightsUpdateManyMutationInputObjectSchema } from './tblAgrRightsUpdateManyMutationInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInput>;
export const tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInputObjectZodSchema = makeSchema();
