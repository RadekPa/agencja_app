import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateWithoutDictLanguagesInputObjectSchema as tblCustomersUpdateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUpdateWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedUpdateWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInput>;
export const tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
