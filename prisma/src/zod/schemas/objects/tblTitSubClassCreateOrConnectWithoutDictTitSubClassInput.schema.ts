import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateOrConnectWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateOrConnectWithoutDictTitSubClassInput>;
export const tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
