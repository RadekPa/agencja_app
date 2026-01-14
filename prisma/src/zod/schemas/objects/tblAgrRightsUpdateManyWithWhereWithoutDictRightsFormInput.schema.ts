import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema';
import { tblAgrRightsUpdateManyMutationInputObjectSchema as tblAgrRightsUpdateManyMutationInputObjectSchema } from './tblAgrRightsUpdateManyMutationInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInput>;
export const tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInputObjectZodSchema = makeSchema();
