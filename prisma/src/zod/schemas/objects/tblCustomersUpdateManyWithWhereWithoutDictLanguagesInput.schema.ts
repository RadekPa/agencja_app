import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersScalarWhereInputObjectSchema as tblCustomersScalarWhereInputObjectSchema } from './tblCustomersScalarWhereInput.schema';
import { tblCustomersUpdateManyMutationInputObjectSchema as tblCustomersUpdateManyMutationInputObjectSchema } from './tblCustomersUpdateManyMutationInput.schema';
import { tblCustomersUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedUpdateManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustomersUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblCustomersUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateManyWithWhereWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateManyWithWhereWithoutDictLanguagesInput>;
export const tblCustomersUpdateManyWithWhereWithoutDictLanguagesInputObjectZodSchema = makeSchema();
