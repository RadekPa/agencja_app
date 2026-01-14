import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessScalarWhereInputObjectSchema as tblUserAccessScalarWhereInputObjectSchema } from './tblUserAccessScalarWhereInput.schema';
import { tblUserAccessUpdateManyMutationInputObjectSchema as tblUserAccessUpdateManyMutationInputObjectSchema } from './tblUserAccessUpdateManyMutationInput.schema';
import { tblUserAccessUncheckedUpdateManyWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedUpdateManyWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedUpdateManyWithoutTblPlacesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblUserAccessUpdateManyMutationInputObjectSchema), z.lazy(() => tblUserAccessUncheckedUpdateManyWithoutTblPlacesInputObjectSchema)])
}).strict();
export const tblUserAccessUpdateManyWithWhereWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateManyWithWhereWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateManyWithWhereWithoutTblPlacesInput>;
export const tblUserAccessUpdateManyWithWhereWithoutTblPlacesInputObjectZodSchema = makeSchema();
